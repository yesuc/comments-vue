import { mapGetters } from "vuex";

export default {
    name: "Thread",
    components: {},
    props: {
        headComment: {
            type: Object,
            default: () => null,
        },
        childCommentList: {
            type: Array,
            default: () => [],
        },
        collapsed: {
            type: Boolean,
            default: false,
        },
        paddingLeft: {
            type: Number,
            default: 0,
        }
    },
    data() {
        return {
            childrenHidden: false,
        }
    },
    watch: {
        collapsed: {
            immediate: true,
            handler(value) {
                this.childrenHidden = value;
            },
        }
    },
    computed: {
        ...mapGetters({
            userAccounts: 'USER_ACCOUNTS'
        }),
        paddingLeftStyle() {
            return `padding-left: ${this.paddingLeft * 2}vw`
        },
        headCommentAccount() {
            if (!this.headComment) return undefined;
            const account = this.userAccounts.find((account) => {
                return account.id === this.headComment.userId;
            });
            return account;
        }
    },
    methods: {
        getComment(targetId) {
            return this.childCommentList.find((item) => {
                return item.commentObj.id === targetId;
            });
        },
        getUserAccount(targetId) {
            return this.userAccounts.find((item) => {
                return item.id === targetId;
            });
        }
    },
}