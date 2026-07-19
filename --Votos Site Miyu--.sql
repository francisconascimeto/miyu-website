--Votos Site Miyu--
--1.Cria a tabela de votos no padrão PostgreSQL--

CREATE TABLE IF NOT EXISTS votos (
    id SERIAL PRIMARY KEY,
    candidata VARCHAR(50) NOT NULL CHECK (candidata IN ( 'Miyu' , 'Cali' , 'Mancini')),
    data_voto TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

--2. Insere alguns votos de teste--

INSERT INTO votos (candidata) VALUES ('Miyu');
INSERT INTO votos (candidata) VALUES ('Cali');
INSERT INTO votos (candidata) VALUES ('Mancini');

--3. Consulta para conferir o resultado da votação--
SELECT candidata, COUNT(*) AS total_votos
FROM votos
GROUP BY candidata
ORDER BY total_votos DESC;
