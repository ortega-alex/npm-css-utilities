export interface User {
    id_empleado?: string;
    id_persona?: string;
    id_puesto?: string;
    id_cliente?: string;
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
    extension?: string;
    supervisor?: string;
    usuario_externo?: string;
    telefono_externo?: string;
}

export interface Sesion extends User {
    id_sesion: string;
    abreviatura: string;
}

export interface Login extends User {
    id_usuario: string;
}
