"use client";
import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";

const HeaderWrapper = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  return <Header isAuthenticated={isAuthenticated} user={user} />;
};

export default HeaderWrapper;