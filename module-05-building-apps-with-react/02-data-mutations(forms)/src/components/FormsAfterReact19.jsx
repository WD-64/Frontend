const FormsAfterReact19 = ({ setShowForm }) => {
  const handleSubmit = (formData) => {
    const email = formData.get('email');
    const name = formData.get('name');

    //Validation

    console.log(name, email);
  };

  return (
    <dialog id='my_modal_1' className='modal modal-open'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>Hello!</h3>
        <p className='py-4'>Press ESC key or click the button below to close</p>
        <div className='modal-action'>
          <div className='max-w-xl mx-auto bg-white p-6 rounded-lg shadow space-y-6'>
            <h2 className='text-2xl font-bold text-center text-gray-800'>
              Contact Us
            </h2>
            {/* FORM! */}
            <form className='space-y-4' action={handleSubmit}>
              <button
                onClick={() => setShowForm((prev) => !prev)}
                className='btn btn-primary'
              >
                close
              </button>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Name
                </label>
                <input
                  name='name'
                  className='w-full mt-1 border border-gray-300 rounded px-3 py-2'
                  placeholder='Leia Organa'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Email
                </label>
                <input
                  name='email'
                  className='w-full mt-1 border border-gray-300 rounded px-3 py-2'
                  placeholder='leia@rebellion.org'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Message
                </label>
                <textarea
                  name='message'
                  rows={4}
                  className='w-full mt-1 border border-gray-300 rounded px-3 py-2'
                  placeholder='Tell us how we can help...'
                />
              </div>
              <button
                type='submit'
                className='w-full py-2 rounded text-white bg-blue-600 hover:bg-blue-700'
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );

  //     <div className='max-w-xl mx-auto bg-white p-6 rounded-lg shadow space-y-6'>
  //       <h2 className='text-2xl font-bold text-center text-gray-800'>
  //         Contact Us
  //       </h2>
  //       {/* FORM! */}
  //       <form className='space-y-4' action={handleSubmit}>
  //         <div>
  //           <label className='block text-sm font-medium text-gray-700'>
  //             Name
  //           </label>
  //           <input
  //             name='name'
  //             className='w-full mt-1 border border-gray-300 rounded px-3 py-2'
  //             placeholder='Leia Organa'
  //           />
  //         </div>
  //         <div>
  //           <label className='block text-sm font-medium text-gray-700'>
  //             Email
  //           </label>
  //           <input
  //             name='email'
  //             className='w-full mt-1 border border-gray-300 rounded px-3 py-2'
  //             placeholder='leia@rebellion.org'
  //           />
  //         </div>
  //         <div>
  //           <label className='block text-sm font-medium text-gray-700'>
  //             Message
  //           </label>
  //           <textarea
  //             name='message'
  //             rows={4}
  //             className='w-full mt-1 border border-gray-300 rounded px-3 py-2'
  //             placeholder='Tell us how we can help...'
  //           />
  //         </div>
  //         <button
  //           type='submit'
  //           className='w-full py-2 rounded text-white bg-blue-600 hover:bg-blue-700'
  //         >
  //           Send message
  //         </button>
  //       </form>
  //     </div>
  //   </main>
  // );
};

export default FormsAfterReact19;
