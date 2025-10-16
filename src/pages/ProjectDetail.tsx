import { useParams, Link } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen p-10">
      <Link to="/" className="text-blue-500 hover:underline">
        ← Kembali
      </Link>
      <h1 className="text-3xl font-bold mt-6">Detail Project #{id}</h1>
      <p className="text-gray-600 mt-4">
        Ini adalah halaman detail untuk project dengan ID <b>{id}</b>.
      </p>
      {/* Kamu bisa menambahkan konten dinamis di sini */}
    </div>
  );
}
