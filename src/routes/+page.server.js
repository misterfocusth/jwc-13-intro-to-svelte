import * as db from '$lib/database.js';

export async function load() {
    return {
        todos: db.getTodos()
    };
}

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        const title = data.get('title');
        const description = data.get('description');

        db.createTodo(title, description);
    },

    delete: async ({ request }) => {
        const data = await request.formData();
        const id = data.get('id');
        db.deleteTodo(id);
    },

    update: async ({ request }) => {
        const data = await request.formData();
        const id = data.get('id');
        const title = data.get('title');
        const description = data.get('description');

        db.updateTodo(id, title, description);
    }
}