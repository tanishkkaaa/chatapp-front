import React from "react";

export default function Avatar({ username, userId, isOnline, avatarLink }) {
  const colors = [
    "#90CDF4",
    "#F56565",
    "#D6BCFA",
    "#BC85E0",
    "#7F9CF5",
    "#F6AD55",
    "#F687B3",
    "#68D391",
    "#FBBF24",
    "#4299E1",
  ];

  // Generate a consistent color from userId
  const userIdBase10 = parseInt(userId?.substring(10) || "0", 16);
  const colorIndex = userIdBase10 % colors.length;
  const color = colors[colorIndex];

  const squircleStyles = {
    "--squircle-bg-color": color,
  };

  return (
    <div className="relative inline-block">
      {/* Avatar shape */}
      <div className="squircle text-black" style={squircleStyles}>
        <div
          className="squircle__inline text-xl text-white uppercase"
          style={{ textShadow: "0.4px 0.4px 1px gray" }}
        >
          {avatarLink ? (
            <img
              src={avatarLink}
              className="h-10 w-10 rounded-full object-cover"
              alt={username?.[0] || "User"}
            />
          ) : (
            <span>{username?.[0] || "?"}</span>
          )}
        </div>
      </div>

      {/* Online Status Dot */}
      {isOnline && (
        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
      )}

      {/* Squircle Styles */}
      <style>
        {`
          .squircle {
            --squircle-fg: var(--bg, #ffffff);
            --squircle-size: 44px;
            --squircle-radii: 50% / 10%;
            aspect-ratio: 1;
            display: grid;
            grid-template-columns: 1fr;
            max-width: 80%;
            width: var(--squircle-size);
            position: relative;
          }
          .squircle::before,
          .squircle::after {
            align-self: center;
            background-color: var(--squircle-bg-color, #6B8AFD);
            content: "";
            grid-column: 1;
            grid-row: 1;
            justify-self: center;
          }
          .squircle::before,
          .squircle::after {
            border-radius: var(--squircle-radii);
            height: 115%;
            width: 100%;
          }
          .squircle::after {
            transform: rotate(90deg);
          }
          .squircle__inline {
            border-radius: 7%;
            display: grid;
            inset-block: 5%;
            inset-inline: 5%;
            place-content: center;
            position: absolute;
            z-index: 1;
          }
        `}
      </style>
    </div>
  );
}
