'use client';

const officeMaps = [
    {
        name: "Faridabad",
        address: "RPS Infinia 12th Avenue, Lower Ground Floor, Near Sarai Metro Station, Sector 27C, Faridabad, Haryana - 121003",
        mapUrl: "https://www.google.com/maps?q=RPS%20Infinia%2012th%20Avenue%2C%20Lower%20Ground%20Floor%2C%20Near%20Sarai%20Metro%20Station%2C%20Sector%2027C%2C%20Faridabad%2C%20Haryana%20121003&output=embed",
    },
    {
        name: "Noida",
        address: "Supertech Astralis, Plot No. 1, Sector 94, Noida, Uttar Pradesh 201301",
        mapUrl: "https://www.google.com/maps?q=Supertech%20Astralis%20Sector%2094%20Noida%20Uttar%20Pradesh&output=embed",
    },
];

export default function Section2() {
    return (
        <div className="contact-map-page">
            <div className="container">
                <div className="contact-map-grid">
                    {officeMaps.map((office) => (
                        <div className="contact-map-card" key={office.name}>
                            <div className="contact-map-heading">
                                <h3>{office.name}</h3>
                                <p>{office.address}</p>
                            </div>
                            <iframe
                                title={`${office.name} office map`}
                                src={office.mapUrl}
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
