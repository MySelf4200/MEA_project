import joi from "joi";

const accountSchema = joi.object({
  id:joi.string().required(),
  first_name:joi.string().required(),
  surname:joi.string().required(),
  date_of_birth: joi.string().required(),
  join_date: joi.string().required(),
  steps: joi.number().required(),
  moves: joi.number().required(),
});

export default accountSchema;