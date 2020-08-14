

const UserStorage = {
    STORAGE_KEY : 'user_info',

    getUser: async () => {
        return JSON.parse(localStorage.getItem(UserStorage.STORAGE_KEY));
    },

    storeUser: async (user) => {
        return localStorage.setItem(UserStorage.STORAGE_KEY, JSON.stringify(user));
    },

    removeUser: async () => {
        return localStorage.removeItem(UserStorage.STORAGE_KEY);
    },
};

export default UserStorage;