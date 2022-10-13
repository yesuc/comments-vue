import UserProfileTable from "../../widgets/UserProfileTable";
import Threads from "../../widgets/Thread";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    UserProfileTable,
    Threads,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      tab: 0,
      items: ["Threads", "User Profiles"],
    };
  },
  computed: {
    ...mapGetters({
      getUserAccounts: "USER_ACCOUNTS",
      getThreadComments: "THREAD_COMMENTS",
    }),
  },
  methods: {
    getComment(targetId) {
      return this.commentList.find((item) => {
          return item.commentObj.id === targetId;
    });
  }
  },
  created() {
    this.$store.dispatch("INITIALIZE");
  },
};