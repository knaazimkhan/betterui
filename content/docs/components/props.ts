export const MorphingTextProps = {
  text: { type: 'string' },
  speed: {
    description: 'Duration of each letter change in milliseconds',
    type: 'number',
    default: 30,
    typeDescription: 'milliseconds',
  },
}
