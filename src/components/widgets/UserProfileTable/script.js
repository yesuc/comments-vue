export default {
    name: "UserProfileTable",
    data() {
      return {
        headers: [
          {
            text: "Username",
            value: "name",
          },
          {
            text: "Email",
            value: "email",
          },
        ],
      };
    },
    props: {
      userList: {
        type: Array,
        default: () => [],
      },
    },
};