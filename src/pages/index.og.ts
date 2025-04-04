import type { APIContext } from "astro";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import fetch from "node-fetch";
import type { ReactNode } from "react";

async function loadGoogleFont() {
  try {
    const fontUrl =
      "https://raw.githubusercontent.com/googlefonts/roboto/main/src/hinted/Roboto-Bold.ttf";
    const response = await fetch(fontUrl);

    if (!response.ok) {
      throw new Error(`Failed to load font: ${response.statusText}`);
    }

    return await response.arrayBuffer();
  } catch (error) {
    console.error("Error loading font:", error);
    throw error;
  }
}

export async function GET({ params }: APIContext) {
  const markup = {
    type: "div",
    props: {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(0, 0, 0)",
        width: "100%",
        height: "100%",
        padding: "40px",
      },
      children: {
        type: "h1",
        props: {
          style: {
            fontSize: "120px",
            color: "white",
            margin: "0",
            fontFamily: "Roboto",
            fontWeight: "bold",
          },
          children: [
            "Rg Motor  ",
            {
              type: "span",
              props: {
                style: {
                  color: "rgb(255, 119, 40)",
                  display: "block",
                  marginTop: "0px",
                },
                children: "Sport",
              },
            },
          ],
        },
      },
    },
  } as ReactNode;

  try {
    const fontData = await loadGoogleFont();

    const svg = await satori(markup, {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Roboto",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    });

    const resvg = new Resvg(svg, {
      fitTo: {
        mode: "width",
        value: 1200,
      },
    });
    const pngBuffer = resvg.render().asPng();

    return new Response(pngBuffer, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Error al generar la imagen:", error);
    return new Response("Error generating image", {
      status: 500,
      statusText: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
