import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Partido({partidoData}) {
    const [showApuestas, setShowApuestas] = useState(false)

    return (
        <>
            <div className="mb-4">
                <strong>Local:</strong> {partidoData.local}
                <br/>
                <strong>Visitante:</strong> {partidoData.visitante}
                <br/>

                <Button onClick={() => setShowApuestas(!showApuestas)}>Ver apuestas</Button>
            </div>

            {
                showApuestas &&
                <div className="mb-4">
                    <strong>{partidoData.local}:</strong> {partidoData.apuestas["1"]}
                    <br/>
                    <strong>Empate:</strong> {partidoData.apuestas["X"]}
                    <br/>
                    <strong>{partidoData.visitante}:</strong> {partidoData.apuestas["2"]}
                </div>
            }
        </>
    )
};
