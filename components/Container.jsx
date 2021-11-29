import React from "react";

import StaticContent from "./StaticContent";
import Votes from "./Votes";

const Container = ({
  options,
  Toggle,
  submitOption,
  toggleAdd,
  userVotes,
  filter,
  setFilter,
  votesLoading,
}) => {
  return (
    <>
      <Votes
        options={options}
        Toggle={Toggle}
        submitOption={submitOption}
        toggleAdd={toggleAdd}
        userVotes={userVotes}
        filter={filter}
        setFilter={setFilter}
        loading={votesLoading}
      />
      <StaticContent />
    </>
  );
};

export default Container;
