interface Props {
  params: Promise<{ category: string }>;
}

const Page = async ({ params }: Props) => {
  const { category } = await params;

  return <div className=''>Category: {category}</div>;
};

// http://localhost:3000/[category]

export default Page;
