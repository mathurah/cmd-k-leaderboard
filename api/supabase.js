import { useSupabase } from '../hooks/useSupabase';
const supabase = useSupabase();

/* OPTIONS */
export const getAllOptions = async (filter) => {
  const { data: options, error } = await supabase
    .from('options')
    .select()
    .order(filter, { ascending: false })
    .order('created_at', { ascending: false });
  if (error) {
    handleError(error);
  }
  return options;
};

export const getOption = async (id) => {
  const { data: options, error } = await supabase
    .from('options')
    .select()
    .eq('id', id);
  if (error) {
    handleError(error);
  }
  return options;
};

export const insertOption = async (option, user) => {
  const { data: newOption, error } = await supabase.from('options').insert({
    name: option.name,
    url: option.url,
    created_by: user.id,
    submitted_by_user: option.isUser,
  });
  if (error) {
    handleError(error);
  }
  return newOption;
};

export const updateOptionVotes = async (id, votes) => {
  const { data: option, error } = await supabase
    .from('options')
    .update({ votes })
    .eq('id', id);
  if (error) {
    handleError(error);
  }
  return option;
};

/* VOTES */

export const getUserVotes = async (user) => {
  const { data: votes, error } = await supabase
    .from('votes')
    .select('option_id')
    .eq('user_id', user.id);
  if (error) {
    handleError(error);
  }
  return votes;
};

export const insertVote = async (optionId, user) => {
  const { data: newVote, error } = await supabase.from('votes').insert({
    option_id: optionId,
    user_id: user.id,
  });
  if (error) {
    handleError(error);
  }
  return newVote;
};

export const deleteVote = async (optionId, user) => {
  const { data: deletedVote, error } = await supabase
    .from('votes')
    .delete()
    .eq('option_id', optionId)
    .eq('user_id', user.id);
  if (error) {
    handleError(error);
  }
  return deletedVote;
};

/* PROFILES */

export const upsertUser = async (user) => {
  const { data: newUser, error } = await supabase.from('users').upsert({
    id: user.id,
    email: user.email,
  });
  if (error) {
    handleError(error);
  }
  return newUser;
};

/* AUTH */

export const signIn = async (provider) => {
  await supabase.auth.signIn({
    provider,
  });

  // const { data: newUser, error } = await supabase.from('users').insert();
  // if (error) {
  //   handleError(error);
  // }
  // return newUser;
};

export const signOut = async () => {
  await supabase.auth.signOut();
};

const handleError = (error) => {
  console.error(error);
  if (error.message === 'JWT expired') {
    signOut();
  }
};
