function Card({ name, total }) {
  return (
    <>
      <div className="w-40 h-30 bg-gray-800 flex flex-col justify-center items-center gap-3">
        <p className="text-white text-xl">{name}</p>
        <p className="text-white text-md">{total}</p>
      </div>
    </>
  );
}

export default Card;
