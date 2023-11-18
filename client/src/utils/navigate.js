const navigate = (history, path, data) => {
    history({
      pathname: `/${path}`,
      state: { data },
    });
  };
  
  export default navigate;