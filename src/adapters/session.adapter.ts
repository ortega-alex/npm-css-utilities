/* eslint-disable @typescript-eslint/no-explicit-any */
import { Login, Sesion } from '../interface';

/**
 *
 * @param {Request} values
 * @returns {Object}
 */
export const sessionAdapter = (values: Login): Sesion => ({
    id_sesion: values.id_usuario,
    id_empleado: values?.id_empleado,
    id_persona: values?.id_persona,
    id_puesto: values?.id_puesto,
    usuario: values.usuario,
    tipo_acceso: values?.tipo_acceso,
    estado: values?.estado,
    suspendido: values?.suspendido,
    correo: values?.correo,
    nombre_corto: values?.nombre_corto,
    nombre_completo: values.nombre_completo,
    imagenes: values?.imagenes,
    puesto: values?.puesto,
    abreviatura: String(values.nombre_corto).substring(0, 2).toUpperCase(),
    extension: values?.extension,
    supervisor: values?.supervisor,
    usuario_externo: values?.usuario_externo,
    telefono_externo: values?.telefono_externo
});
