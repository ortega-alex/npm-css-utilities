export interface Sesion {
    id_sesion: string;
    id_empleado?: string;
    id_persona?: string;
    id_puesto?: string;
    usuario: string;
    tipo_acceso?: string;
    estado: string;
    suspendido: string;
    correo: string;
    nombre_corto: string;
    nombre_completo: string;
    imagenes?: Array<string>;
    puesto?: string;
    abreviatura: string;
}

export interface Login {
    id_usuario: string;
    id_usuario_externo?: string;
    id_empleado?: string;
    id_persona?: string;
    id_puesto?: string;
    usuario: string;
    tipo_acceso?: string;
    estado: string;
    suspendido: string;
    correo: string;
    nombre_corto: string;
    nombre_completo: string;
    imagenes?: Array<string>;
    puesto?: string;
}
