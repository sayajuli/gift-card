import Layout from "./Layout";

const StepLayout = (props) => {
  const {step="Mau ditutorin yang mana dek?", children} = props;

  return (
    <Layout>
      <h1 className="text-4xl font-bold">{step}</h1>
      {children}
    </Layout>
  )
}

export default StepLayout;