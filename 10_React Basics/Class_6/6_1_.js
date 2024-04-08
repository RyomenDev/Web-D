
// no return statement
{
  reviews.map((review) =>() (<Card review={review}></Card>));
}

// return statement
{
  reviews.map((review) => {return <Card review={review}></Card>});
}
