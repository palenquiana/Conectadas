import { Post } from "@types";
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { usePost, useAuth } from "../../../hook";

const SharePublication = () => {
  const { posts, upgradePost } = usePost();
  const { me } = useAuth();
  const { register, handleSubmit } = useForm<{ text: string }>({
    defaultValues: { text: "" },
  });

  const onSubmit = (data: { text: string }, post: Post) => {
    console.log(data);
    me &&
      upgradePost(post.id, {
        comments: [
          ...(post.comments || []),
          {
            text: data.text,
            user: {
              id: me.id,
              lastname: me.lastname,
              name: me.name,
            },
            date: new Date(),
          },
        ],
      });
  };

  return (
    <>
      {posts &&
        posts?.map((post) => (
          <Card key={post.id} className=" card-post border-0">
            <>
              {post.image && (
                <Card.Img
                  src={`http://image.tmdb.org/t/p/w500${post.image}`}
                  className="img"
                ></Card.Img>
              )}

              <Card.Body>
                <Card.Title className="f-4">
                  {post.user.name || me?.name}{" "}
                  {post.user.lastname || me?.lastname}
                </Card.Title>
                <Card.Title className="f-2">{post.title}</Card.Title>
                <Card.Subtitle>{post.date.toString()}</Card.Subtitle>
                <Card.Text>{post.detail}</Card.Text>
              </Card.Body>

              {post?.comments?.map((coment) => {
                return (
                  <Card
                    className="mt-2 mb-2 bg-comment m-5"
                    key={Math.random() * parseInt(post.date.toString(), 10)}
                  >
                    <Card.Header>{coment.date.toString()}</Card.Header>
                    <Card.Body className="card-comment">
                      <Card.Title className=" me-2">
                        {coment.user.name} {coment.user.lastname}
                      </Card.Title>
                      <Card.Text>
                        {"-"} {coment.text}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
            </>
            <Form onSubmit={handleSubmit((data) => onSubmit(data, post))}>
              <Form.Control
                type="text"
                placeholder="Agregá un comentario"
                {...register("text")}
              ></Form.Control>
              <Button type="submit" className="mt-2 mb-2">
                Enviar
              </Button>
            </Form>
          </Card>
        ))}
    </>
  );
};
export { SharePublication };
