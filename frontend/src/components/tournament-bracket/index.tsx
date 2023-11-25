import React from "react";
import {
  SingleEliminationBracket,
  Match,
  SVGViewer,
  createTheme,
} from "@g-loot/react-tournament-brackets";
import { useWindowSize } from "@uidotdev/usehooks";

interface ITournamentBracket {
  tournamentBracket: any[]
}

export default function TournamentBracket({tournamentBracket}: ITournamentBracket) {
  const { width, height } = useWindowSize();
  const finalWidth = Math.max((width ?? 0) - 50, 500);
  const finalHeight = Math.max((height ?? 0) - 100, 500);

  const GlootTheme = createTheme({
    textColor: { main: "#000000", highlighted: "#F4F2FE", dark: "#707582" },
    matchBackground: { wonColor: "#2D2D59", lostColor: "#1B1D2D" },
    score: {
      background: {
        wonColor: `#10131C`,
        lostColor: "#10131C",
      },
      text: { highlightedWonColor: "#7BF59D", highlightedLostColor: "#FB7E94" },
    },
    border: {
      color: "#292B43",
      highlightedColor: "RGBA(152,82,242,0.4)",
    },
    roundHeader: { backgroundColor: "#3B3F73", fontColor: "#F4F2FE" },
    connectorColor: "#3B3F73",
    connectorColorHighlight: "RGBA(152,82,242,0.4)",
    canvasBackground: "#0000",
  });

  return (
    <SingleEliminationBracket
      theme={GlootTheme}
      matches={tournamentBracket}
      matchComponent={Match}
      svgWrapper={({ children, ...props }) => (
        <SVGViewer
          width={finalWidth}
          height={finalHeight}
          background="transparent"
          SVGBackground="transparent"
          {...props}
        >
          {children}
        </SVGViewer>
      )}
    />
  );
}
