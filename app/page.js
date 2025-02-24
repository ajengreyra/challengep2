import React from 'react';

const students = [
  { no: 1, nim: '12345', nama: 'John Doe', gender: 'Laki-laki', prodi: 'Sistem Informasi', kelas: 'A', semester: 4, alamat: 'Jl. Merdeka No. 1', hobby: 'Bermain Musik', citaCita: 'Software Engineer' },
  { no: 2, nim: '67890', nama: 'Jane Smith', gender: 'Perempuan', prodi: 'Sistem Informasi', kelas: 'B', semester: 4, alamat: 'Jl. Pahlawan No. 2', hobby: 'Membaca', citaCita: 'Data Scientist' },
  { no: 3, nim: '11223', nama: 'Michael Johnson', gender: 'Laki-laki', prodi: 'Sistem Informasi', kelas: 'C', semester: 4, alamat: 'Jl. Pemuda No. 3', hobby: 'Berkebun', citaCita: 'Cloud Architect' },
  // Add more students here as needed
];

const Page = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-semibold mb-6 text-center text-blue-600">Data Mahasiswa</h1>
      
      <table className="min-w-full table-auto bg-white shadow-lg rounded-lg border-collapse">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-lg">No</th>
            <th className="px-6 py-3 text-left text-lg">NIM</th>
            <th className="px-6 py-3 text-left text-lg">Nama</th>
            <th className="px-6 py-3 text-left text-lg">Gender</th>
            <th className="px-6 py-3 text-left text-lg">Prodi</th>
            <th className="px-6 py-3 text-left text-lg">Kelas</th>
            <th className="px-6 py-3 text-left text-lg">Semester</th>
            <th className="px-6 py-3 text-left text-lg">Alamat</th>
            <th className="px-6 py-3 text-left text-lg">Hobby</th>
            <th className="px-6 py-3 text-left text-lg">Cita-cita</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.no} className="border-b hover:bg-gray-100">
              <td className="px-6 py-4 text-center text-lg text-gray-700">{student.no}</td>
              <td className="px-6 py-4 text-center text-lg text-gray-700">{student.nim}</td>
              <td className="px-6 py-4 text-lg text-gray-700">{student.nama}</td>
              <td className="px-6 py-4 text-center text-lg text-gray-700">{student.gender}</td>
              <td className="px-6 py-4 text-lg text-gray-700">{student.prodi}</td>
              <td className="px-6 py-4 text-center text-lg text-gray-700">{student.kelas}</td>
              <td className="px-6 py-4 text-center text-lg text-gray-700">{student.semester}</td>
              <td className="px-6 py-4 text-lg text-gray-700">{student.alamat}</td>
              <td className="px-6 py-4 text-lg text-gray-700">{student.hobby}</td>
              <td className="px-6 py-4 text-lg text-gray-700">{student.citaCita}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
