export default {
    async getAll() {
        const response = await fetch(
            "https://my-json-server.typicode.com/juliaheller/db-mock/users"
        );
        return await response.json();
    },
    async getOne(id) {
        // const response = await fetch(
        //     "https://my-json-server.typicode.com/juliaheller/db-mock/user/" +
        //         id +
        //         "/"
        // );
        const response = await fetch(
            "https://my-json-server.typicode.com/juliaheller/db-mock/user/"
        );

        return await response.json();
    },

    // update user
};
