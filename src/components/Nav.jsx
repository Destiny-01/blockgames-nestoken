import React from "react";

const Nav = ({account, connect}) => {
  console.log(account)

  return (
    <nav className="flex justify-between items-center  mb-6 px-4 bg-yellow-300">
      <h1 className="text-gray-600 font-bold text-2xl font-sans lg:text-4xl">
        Nest_Reward
      </h1>

      {account ? (
        <button disabled className="button">{account}</button>
      ) : (
        <button className="button" onClick={connect}>
          Connect Wallet
        </button>
      )}
    </nav>
  );
};

export default Nav;
