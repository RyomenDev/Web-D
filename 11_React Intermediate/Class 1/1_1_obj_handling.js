
Form

Advantage of react form
    1. save state using hook - useState 
    2. with input of data parallel saving state , retaining older state and updating new state
    3. Data already present , no need to accumulate data

---------------------------------------------------------

multiple state handling : object
                        : single handler

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
      });
    
      const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

---------------------------------------------------------

we take old values to retain other values which is not changed

---------------------------------------------------------



---------------------------------------------------------