import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

type Usuario = { nombre: string; correo: string };
type Ajustes = { mostrarSinopsis: boolean; mostrarAnio: boolean };

type Ctx = {
    usuario: Usuario | null;
    iniciarSesion: (correo: string) => void;
    cerrarSesion: () => void;
    favoritos: string[];
    esFavorito: (id: string) => boolean;
    alternarFavorito: (id: string) => void;
    ajustes: Ajustes;
    cambiarAjuste: (clave: keyof Ajustes, valor: boolean) => void;
};

const BibliotecaContext = createContext<Ctx | null>(null);

export function BibliotecaProvider({ children }: { children: ReactNode }) {
    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const [favoritos, setFavoritos] = useState<string[]>([]);
    const [ajustes, setAjustes] = useState<Ajustes>({ mostrarSinopsis: true, mostrarAnio: true });

    const iniciarSesion = useCallback((correo: string) => {
    const base = correo.split('@')[0];
    const nombre = base.charAt(0).toUpperCase() + base.slice(1);
    setUsuario({ nombre, correo });
    }, []);

    const cerrarSesion = useCallback(() => setUsuario(null), []);

    const alternarFavorito = useCallback((id: string) => {
    setFavoritos((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
    }, []);

    const cambiarAjuste = useCallback((clave: keyof Ajustes, valor: boolean) => {
    setAjustes((prev) => ({ ...prev, [clave]: valor }));
    }, []);

    const valor = useMemo<Ctx>(
    () => ({
        usuario,
        iniciarSesion,
        cerrarSesion,
        favoritos,
        esFavorito: (id) => favoritos.includes(id),
        alternarFavorito,
        ajustes,
        cambiarAjuste,
    }),
    [usuario, favoritos, ajustes, iniciarSesion, cerrarSesion, alternarFavorito, cambiarAjuste],
    );

    return <BibliotecaContext.Provider value={valor}>{children}</BibliotecaContext.Provider>;
}

export function useBiblioteca() {
    const ctx = useContext(BibliotecaContext);
    if (!ctx) throw new Error('useBiblioteca debe usarse dentro de BibliotecaProvider');
    return ctx;
}