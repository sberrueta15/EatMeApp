using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Web;

namespace EatMeApp.Common
{
    /// <summary>
    ///
    /// </summary>
    [JsonObject("Errors")]
    public class ValidationResults<T>
    {
        /// <summary>
        /// Creates a validation result object, success set to true by default
        /// </summary>
        public ValidationResults()
        {
            Success = true;
            ErrorsCollection = new ErrorsCollection();
        }

        public ExpandoObject GetErrors()
        {
            var errors = new ExpandoObject();
            (errors as IDictionary<string, object>)["errors"] = ErrorsCollection.errors;
            return errors;
        }

        [JsonIgnore]
        public bool Success { get; protected set; }

        [JsonIgnore]
        public T Data { get; set; }

        /// <summary>
        /// Adds an error to the corresponding key. By default sets success to false
        /// </summary>
        /// <param name="key">Error key</param>
        /// <param name="value">Error value</param>
        /// <param name="success">Success indicator, false by default</param>
        public void AddError(string key, string value, bool success = false)
        {
            List<string> fieldErrors = null;
            if (ErrorsCollection.errors.ContainsKey(key))
            {
                fieldErrors = ErrorsCollection.errors[key] as List<string>;
            }

            if (fieldErrors == null)
            {
                fieldErrors = new List<string>();
                ErrorsCollection.errors[key] = fieldErrors;
            }

            fieldErrors.Add(value);
            this.Success = success;
        }

        /// <summary>
        /// Adds an error to the corresponding key. By default sets success to false
        /// </summary>
        /// <param name="key">Error key</param>
        /// <param name="value">Error value</param>
        /// <param name="success">Success indicator, false by default</param>
        public void AddSingleError(string key, string value, bool success = false)
        {
            ErrorsCollection.errors[key] = value;
            this.Success = success;
        }

        private ErrorsCollection ErrorsCollection;

        public void Merge<U>(ValidationResults<U> otherValidation)
        {
            foreach (var item in otherValidation.ErrorsCollection.errors)
            {
                if (item.Value is List<string>)
                {
                    foreach (var error in item.Value as List<string>)
                    {
                        this.AddError(item.Key, error);
                    }
                }
            }
        }
    }

    public class ErrorsCollection
    {
        public ErrorsCollection()
        {
            errors = new Dictionary<string, object>();
        }

        public Dictionary<string, object> errors { get; set; }
    }
}