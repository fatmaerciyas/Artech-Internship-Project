using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Abstract
{
    public interface IGenericService<T>
    {
        void TAdd(T t);
        void TDelete(T t);
        void TUpdate(T t);
        Task<IEnumerable<T>> GetListAsync();
        Task<T> GetByIDAsync(int id);
        Task<T> GetAsync(Expression<Func<T, bool>> filter);
    }
}
