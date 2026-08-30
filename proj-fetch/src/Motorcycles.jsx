import React, { useEffect, useState } from "react";

const Motorcycles = () => {

    const [motorcycles, setMotorcycles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        const fetchMotorcycles = async () => {

            try {

                const response = await fetch(
                    "https://dummyjson.com/products/category/motorcycle"
                );


                if (!response.ok) {
                    throw new Error(
                        "Failed to fetch motorcycles"
                    );
                }


                const data = await response.json();

                console.log("Motorcycle API:", data);

                setMotorcycles(data.products);


            } catch (err) {

                setError(err.message);

            } finally {

                setLoading(false);

            }

        };


        fetchMotorcycles();

    }, []);


    /* LOADING */

    if (loading) {
        return (
            <div className="api-loading">
                Loading motorcycles...
            </div>
        );
    }


    /* ERROR */

    if (error) {
        return (
            <div className="api-error">
                Error: {error}
            </div>
        );
    }


    return (

        <div className="motorcycle-page">

            <h2 className="motorcycle-heading">
                MOTORCYCLES
            </h2>


            <p className="motorcycle-subtitle">
                Explore our collection of motorcycles
            </p>


            <div className="motorcycle-grid">

                {motorcycles.map((motorcycle) => (

                    <div
                        className="motorcycle-card"
                        key={motorcycle.id}
                    >

                        {/* IMAGE */}

                        <div className="motorcycle-image">

                            <img
                                src={
                                    motorcycle.thumbnail
                                }
                                alt={
                                    motorcycle.title
                                }
                            />

                        </div>


                        {/* INFORMATION */}

                        <div className="motorcycle-info">

                            <h3>
                                {motorcycle.title}
                            </h3>


                            <p className="motorcycle-description">

                                {motorcycle.description}

                            </p>


                            <p className="motorcycle-price">

                                ₦
                                {motorcycle.price.toLocaleString()}

                            </p>


                            <button
                                className="motorcycle-button"
                                onClick={() =>
                                    alert(
                                        `${motorcycle.title} selected!`
                                    )
                                }
                            >
                                View Motorcycle
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

};

export default Motorcycles;