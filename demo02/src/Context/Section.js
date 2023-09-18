
import { useContext } from 'react'
import { LevelContext } from "./LevelContext"

export default function Section({ children }) {
    // 使用context
    const level = useContext(LevelContext)
    return (
        <section className="section">
            {/* // 提供context */}
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </section>
    )
}