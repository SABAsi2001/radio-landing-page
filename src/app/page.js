import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="mb-12 bg-gray-400 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Radio ya Kisasa</h1>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center py-12 px-6">
        <div className="md:w-1/2">
          <Image 
            src="/redio7.jpg" 
            alt="Radio ya mezani" 
            width={500} 
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 mt-2 md:mt-0 md:ml-4 top-0">
          <h2 className="text-2xl font-bold mb-2">Sikiliza kwa ubora wa hali ya juu!</h2>
          <p className="mb-12 bg-gray-400 text-white text-lg top-0 p-4 rounded">
            Radio hii ya mezani imeundwa kwa ubunifu wa hali ya juu, ikiwa na sauti safi,
            muonekano wa kifahari na antenna ya nguvu kwa signal bora. Imewekwa kwa matumizi
            ya nyumbani, ofisini au dukani. Ni rafiki wa familia!
          </p>
          <h3 className="text-2xl font-bold mb-2">Redio hii inasifa zifuatazo</h3>
          <ul className="mb-6 bg-gray-400 text-white list-disc list-inside top-4 rounded p-4">
            <li>Muonekano wa kisasa na wa kuvutia</li>
            <li>Sauti safi na ya nguvu</li>
            <li>Muundo mweusi wa kuvutia</li>
            <li>Betri ya kudumu na chaguzi za umeme tofauti</li>
            <li>Antena yenye nguvu kwa signal bora</li>
          </ul>
          <a
            href="https://wha.link/dyP6Wb" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-12 bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Nunua Sasa
          </a>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="bg-white py-8 px-6 text-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-700">Wasiliana Nasi</h3>
        <p className="text-lg text-gray-700 mb-2 inline-block mb-12 bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-800 transition">
          📍 <strong>Location:</strong> Mbeya, Tanzania
        </p>
        <p className="text-lg text-gray-700 mb-2 inline-block mb-12 bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-800 transition">
          📞 <a             
            href="https://wha.link/dyP6Wb" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Simu:
            </a> 0675437266 / 0716764021
        </p>
        <p className="text-lg text-gray-700 inline-block mb-12 bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-800 transition">
          📧  <a
              href="mailto:reganisabasi00@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              > Email
              </a>

        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-400 text-white text-center font-bold py-4 mt-12">
        <p className="text-sm">© 2025 RS-DESIGNER and IRENE | Bidhaa nzuri na bora</p>
      </footer>
    </div>
  );
}
