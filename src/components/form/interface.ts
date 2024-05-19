import { CSSProperties } from "react"

export interface OptionData {
  label: string
  value: any
  adds?: {[key: string]: any}
}

export interface XFormBase {
  label?: string
  prefix?: string
  key: string
  disabled?: boolean
  loading?: boolean
  hide?: boolean
  placeholder?: string
  onChange?(value: any): void
  onKeyDown?(e: any): void
  continue?: boolean
  required?: boolean
  style?: CSSProperties
  containerStyle?: CSSProperties
  columnMode?: boolean
}

export interface XFormItemText extends XFormBase {
  type?: 'text'
  value?: string
  onChange?(value: string): void
}

export interface XFormItemFile extends XFormBase {
  type?: 'file'
  value?: string
  onChange?(value: any): void
}

export interface XFormItemTextarea extends XFormBase {
  type: 'textarea'
  value?: string
}

export interface XFormItemPassword extends XFormBase {
  type: 'password'
  value?: string
}

export interface XFormItemNumber extends XFormBase {
  type: 'number'
  currency?: boolean
  value?: number
  formatter?: Intl.NumberFormat
  min?: number
}

export interface XFormItemDate extends XFormBase {
  type: 'date'
  value?: Date
}

export interface XFormItemDropdown extends XFormBase {
  value?: string | number | boolean
  type: 'dropdown'
  options?: OptionData[]
}

export interface XFormItemRadioTick extends XFormBase {
  value?: string | number
  type: 'radio-tick'
  options?: OptionData[]
}

export interface XFormItemSwitch extends XFormBase {
  value?: boolean
  type: 'switch'
}

export interface XFormItemMultipleCheck extends XFormBase {
  options?: OptionData[]
  values?: (string | number)[]
  onChange?(values: (string | number)[]): void
  type: 'multiple-check'
}

export interface XFormItemMultiValue extends XFormBase {
  values?: any[]
  type: 'multivalue'
  labelAddButton?: string
  onAddButtonClick?(): void
  renderHeader?(): JSX.Element
  renderRow(value: any, i?: number): JSX.Element
}

export type XFormItem = XFormItemText
 | XFormItemTextarea
 | XFormItemPassword
 | XFormItemNumber
 | XFormItemDropdown
 | XFormItemSwitch
 | XFormItemMultipleCheck
 | XFormItemMultiValue
 | XFormItemDate
 | XFormItemRadioTick
 | XFormItemFile;
