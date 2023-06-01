type SpinnerProps = {
  width: string;
  height: string;
  margin: string;
}

export default function Spinner({customStyles}: {customStyles: SpinnerProps}) {
  return <div className="loader" style={{
    width: customStyles.width,
    height: customStyles.height,
    margin: customStyles.margin
  }}></div>
}