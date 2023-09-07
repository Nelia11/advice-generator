export interface Advice {
  id: number
  advice: string
  handleClick?: React.MouseEventHandler<HTMLButtonElement>
}

export interface GreenButtonProps {
  handleClick?: React.MouseEventHandler<HTMLButtonElement>
}