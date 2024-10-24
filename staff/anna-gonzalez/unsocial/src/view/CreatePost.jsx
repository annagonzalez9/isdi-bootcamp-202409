import logic from '../logic'

import { Input, Button, Field, Form, Label } from '../components/library'

import './CreatePost.css'

export default ({ onCreated }) => {
    console.log('CreatePost -> render')

    return <main className="CreatePost">
        <Form className="create-post-form" onSubmit={event => {
            event.preventDefault()

            const { target: form } = event

            const {
                image: { value: image },
                text: { value: text }
            } = form

            try {
                logic.createPost(image, text)

                onCreated()
            } catch (error) {
                alert(error.message)

                console.error(error)
            }
        }}>
            <h3>Create post</h3>

            <Field>
                <Label htmlFor="image">Image</Label>
                <Input type="text" id="image" />
            </Field>
            <Field>
                <Label htmlFor="text">Text</Label>
                <Input type="text" id="text" />
            </Field>
            <Button type="submit">Create</Button>
        </Form>
    </main>
}