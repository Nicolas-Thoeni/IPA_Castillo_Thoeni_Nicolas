import { statusType } from './trypes'

export interface QuestionnaireItemModel {
    personalNumber: string
    name: string
    surname: string
    entryDate: Date
    status?: statusType,
    remark?: string,
    done?: boolean
}
