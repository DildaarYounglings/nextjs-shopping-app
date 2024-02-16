"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [windowWidth]);
  if (windowWidth <= 514) {
    return (
      <div
        className="w-full flex flex-col gap-3 fixed top-0 left-0 cursor-pointer"
        style={{ backgroundColor: "darkcyan", padding: "1rem" }}
      >
        {isOpen ? (
          <>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              style={{ width: "1fr", textAlign: "center" }}
            >
              <span style={{ color: "lightgrey" }}>{"< "}</span>
              {"Outlaw Stickers"}
              <span style={{ color: "lightgrey" }}>{" />"}</span>
            </button>
            <nav className="flex flex-col gap-3">
              <Link
                style={{
                  backgroundColor: "lightcyan",
                  width: "1fr",
                  height: "fit-content",
                  padding: "0.7rem",
                  textAlign: "center",
                }}
                href="/"
              >
                Home
              </Link>
              <Link
                style={{
                  backgroundColor: "lightcyan",
                  width: "1fr",
                  height: "fit-content",
                  padding: "0.7rem",
                  textAlign: "center",
                }}
                href="/shop"
              >
                Products
              </Link>
              <div
                style={{
                  color: "white",
                  borderRadius: "25%",
                  width: "1fr",
                  height: "fit-content",
                  display: "flex",
                  gap: "1rem",
                  margin: "0px auto",
                }}
              >
                <Link
                  href="/signIn"
                  style={{
                    backgroundColor: "black",
                    width: "1fr",
                    padding: "0.5rem",
                  }}
                >
                  <input type="button" value="Sign In" />
                </Link>
                <Link
                  href="/signOut"
                  style={{
                    backgroundColor: "black",
                    width: "1fr",
                    padding: "0.5rem",
                  }}
                >
                  <input type="button" value="Sign Out" />
                </Link>
              </div>
            </nav>
          </>
        ) : (
          <>
            <p
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <span style={{ color: "lightgrey" }}>{"< "}</span>
              {"Outlaw Stickers"}
              <span style={{ color: "lightgrey" }}>{" />"}</span>
            </p>
          </>
        )}
      </div>
    );
  }
  return (
    <div
      className="w-full flex flex-row gap-3 fixed top-0 left-0"
      style={{ backgroundColor: "darkcyan", padding: "1rem" }}
    >
      <button style={{ width: "1fr", textAlign: "center" }}>
        <span style={{ color: "lightgrey" }}>{"< "}</span>
        {"Outlaw Stickers"}
        <span style={{ color: "lightgrey" }}>{" />"}</span>
      </button>
      <nav className="flex flex-row" style={{margin:"0px 1rem 0rem auto",gap:"10%"}}>
        <div className="flex flex-row gap-3" style={{padding:"0.5rem"}}>
            <Link
            style={{
                backgroundColor: "lightcyan",
                width: "1fr",
                height: "fit-content",
                padding: "0.5rem",
                textAlign: "center",
            }}
            href="/"
            >
            Home
            </Link>
            <Link
            style={{
                backgroundColor: "lightcyan",
                width: "1fr",
                height: "fit-content",
                padding: "0.5rem",
                textAlign: "center",
            }}
            href="/shop"
            >
            Products
            </Link>

        </div>
        <div
          style={{
            color: "white",
            borderRadius: "25%",
            width: "1fr",
            height: "fit-content",
            display: "flex",
            gap: "1rem",
            margin: "0px auto",
            padding:"0.5rem"
          }}
        >
          <Link
            href="/signIn"
            style={{
              backgroundColor: "black",
              width: "1fr",
              padding: "0.5rem",
            }}
          >
            <input type="button" value="Sign In" />
          </Link>
          <Link
            href="/signOut"
            style={{
              backgroundColor: "black",
              width: "1fr",
              padding: "0.5rem",
            }}
          >
            <input type="button" value="Sign Out" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
