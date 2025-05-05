import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-black text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Radio ya Mezaní - Kisasa</h1>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center py-12 px-6">
        <div className="md:w-1/2">
          <Image 
            src="/redio1.png" 
            alt="Radio ya mezani" 
            width={500} 
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-10">
          <h2 className="text-2xl font-semibold mb-4">Sikiliza kwa ubora wa hali ya juu!</h2>
          <p className="mb-4 text-lg">
            Radio hii ya mezani imeundwa kwa ubunifu wa hali ya juu, ikiwa na sauti safi,
            muonekano wa kifahari na antenna ya nguvu kwa signal bora. Imewekwa kwa matumizi
            ya nyumbani, ofisini au dukani. Ni rafiki wa familia!
          </p>
          <ul className="mb-4 list-disc list-inside">
            <li>Sauti safi na ya nguvu</li>
            <li>Muundo mweusi wa kuvutia</li>
            <li>Betri ya kudumu na chaguzi za umeme tofauti</li>
            <li>Antena yenye nguvu kwa signal bora</li>
          </ul>
          <a
          href="https://wha.link/dyP6Wb" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Nunua Sasa
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-4 mt-12">
        <p className="text-sm">© 2025 RS-DESIGNER | Bidhaa Halisi ya Kiswahili</p>
      </footer>
    </div>
  );
}
