import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const Details = ({ dish }) => {

  const comments = dish.comments.map( (comment) => {
    return (
      <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>-- {comment.author},
          &nbsp;
          {new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: '2-digit'
              }).format(new Date(comment.date))}
          </p>
      </li>
    )
  })

  return (
    <Card>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle heading="true">{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
      <div className="container">
        <h5>Comments</h5>
        <ul className='list-unstyled'>
          {comments}
        </ul>
      </div>
    </Card>
  )
}

export default Details;