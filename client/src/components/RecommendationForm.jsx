import React, { useState } from 'react';
import axios from 'axios';

function RecommendationForm() {
    const [title, setTitle] = useState('');
    const [recommendations, setRecommendations] = useState([]);
    const [showTitle, setShowTitle] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://127.0.0.1:5000/recommend', {
                params: { title }
            });

            if (response.data && response.data.recommendations) {
                setRecommendations(response.data.recommendations);
                setTitle(response.data.title);
                setShowTitle(response.data.title_target);
                setError('');
            } else {
                setError('No recommendation found. Try another book.');
                setRecommendations([]);
            }

        } catch (err) {
            setError('Error fetching recommendations. Please try again later.');
            setRecommendations([]);
        }
    };

    return (
        <div className="overflow-y-auto w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-1 mx-auto mb-8">
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder='Enter a book title'
                    className='font-mono w-full p-2 border border-gray-300 rounded mb-2'
                />
                <button type='sumbit' className='font-mono w-full bg-stone-600 hover:bg-stone-700 text-white py-2 rounded'>
                    Get Recommendations
                </button>
            </form>

            {error && <p className='font-mono text-red-500 mt-2'>{error}</p>}
            {recommendations.length > 0 && (
                <div className='mt-5'>
                    <h3 className='font-mono text-xl font-semibold mb-2'>if you like '{showTitle}', you'd like:</h3>
                    <ul>
                        {recommendations.map((rec, index) => (
                            <li key={index} className='font-mono'>
                                {index+1}. <strong>{rec.title}</strong> by {rec.author}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default RecommendationForm;