import * as z from 'zod';

export const searchFormSchema = z.object({
    search: z.string()
})

export type SearchFormInputsTypes = z.infer<typeof searchFormSchema>;