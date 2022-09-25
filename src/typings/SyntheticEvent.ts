/**
 * // TODO
 * 
 * We need this type so that we can pass any type of event/callback to, for example, the Button component.
 * Components that accept callback functions as parameters need to be able to accept any function signature.
 * We're using this SyntheticEvent type here in order to achieve this.
 * 
 * We might want to find a way to make this prettier and more type safe.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SyntheticEvent = any;
