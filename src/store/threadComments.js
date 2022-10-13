
function generateCommentTree(commentsArray) {
  const map = new Map(); // Map node Id -> ref of node
  const treeArray = []; // Array of head nodes
  let node;
  // Construct multibranch tree O(n) time & space
  commentsArray.forEach((commentObj) => {
    // Children is an array of node references
    node = { commentObj, children: [] };
    // Use this map to quickly retrieve any node's children array so we can add children nodes
    map.set(commentObj.id, node.children);
    if (commentObj.parentId === null) {
      // Is head node 
      treeArray.push(node);
    } else {
      // Belongs in children array
      let children = map.get(commentObj.parentId);
      children.push(node)
    }
  });
  
  return treeArray;
}

export default {
  state: {
    comments: [],
  },
  getters: {
    THREAD_COMMENTS(state) {
      return state.comments;
    }
  },
  mutations: {
    THREAD_COMMENTS_SET(state, value) {
      state.comments = value;
    }
  },
  actions: {
    async THREAD_COMMENTS_FETCH_COMMENTS({ commit, dispatch }) {
      await dispatch("BACKEND_FETCH_COMMENTS").then((response) => {
        commit("THREAD_COMMENTS_SET", generateCommentTree(response.data));
      }).catch(error => console.error(error));
    }
  }
};
