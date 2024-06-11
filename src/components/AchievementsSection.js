import React from 'react';
import '../styles/AchievmentsSection.css';

const AchievementsSection = () => (
    <section className="achievements background-tint">
        <div className="achievments-text">
            <h2>Dokonania</h2>
            <p>Nasze dokonania to rezultat naszego oddania kulturze i naturze. Zobacz, co udało się nam osiągnąć.</p>
        </div>

        <div className="achievement-images">
            <img src="/images/achievement1.jpg" alt="Achievement 1" />
            <img src="/images/achievement2.jpg" alt="Achievement 2" />
            <img src="/images/achievement3.jpg" alt="Achievement 3" />
            <img src="/images/achievement4.jpg" alt="Achievement 4" />
        </div>
    </section>
);

export default AchievementsSection;