const React = require('react');

function Intro() {
  return (
    <>
      <Details summary={<b>what is bit packing?</b>} name="what is bit packing">
        <p>
          Bit packing involves storing multiple values (called{' '}
          <a href="https://en.wikipedia.org/wiki/Bit_field">bit fields</a>) in
          as few bits as possible, 'packed' into a contiguous binary value. For
          example, storing a pixel's color and transparency in 32 bits using 8
          bits for the red, green, blue and alpha channels.
        </p>
        <p>
          Bit packing has various usecases, such as to save memory, or to make
          the code run faster by packing pieces of data into a single value that
          the system's hardware can deal with natively (for example, a 32-bit
          integer on a system with a 32-bit{' '}
          <a href="https://en.wikipedia.org/wiki/Word_(computer_architecture)">
            word size
          </a>
          ). See also:{' '}
          <a href="https://en.wikipedia.org/wiki/Bit_field">bit fields</a>,{' '}
          <a href="https://en.wikipedia.org/wiki/Bit_manipulation">
            bit manipulation
          </a>
          , <a href="https://en.wikipedia.org/wiki/Binary_file">binary files</a>
          ,{' '}
          <a href="https://www.kinematicsoup.com/news/2016/9/6/data-compression-bit-packing-101">
            Data Compression: Bit-Packing 101
          </a>
        </p>
      </Details>

      <Details
        summary={<b>how to use this tool</b>}
        name="how to use this tool"
      >
        <p>
          Select an example from the dropdown, and try changing the 'value to
          unpack' (in as decimal, binary or hexadecimal form), and see how it
          affects the unpacked bit field values. Or do the reverse: edit the
          field values (dec/bin/hex) and see how it affects the packed value.
        </p>
        <p>
          Then you can create your own format. Select the 'custom' example, then
          create bitfields by entering the size (in bits) of the bitfield you
          want to create and clicking 'add', and enter a value to interpret
          using your defined fields.
        </p>
      </Details>
    </>
  );
}

const examples = [
  {
    title:
      'RGBA 8/8/8/8 pixel format: 32-bit color with alpha (purple, 50% opacity)',
    description: (
      <p>
        A single color pixel value from a bitmap image, with 8 bits for each
        color channel and 8 bits for alpha, allowing for 16,777,216 distinct
        colors with 256 levels of transparency. This format is used in many
        pieces of software and games. For example, this format is used by the
        HTML Canvas API. The data value shown is 'rebeccapurple',{' '}
        <span
          style={{
            display: 'inline-block',
            width: 10,
            height: 10,
            backgroundColor: 'rebeccapurple',
          }}
        ></span>{' '}
        #663399, at 50% opacity. See also:{' '}
        <a href="https://www.fileformat.info/mirror/egff/ch09_02.htm">
          Pixel Packing
        </a>
      </p>
    ),
    value: 1714657663,
    bitfields: [
      {label: 'Red', fieldSize: 8},
      {label: 'Green', fieldSize: 8},
      {label: 'Blue', fieldSize: 8},
      {label: 'Alpha', fieldSize: 8},
    ],
  },

  {
    title: 'Nintendo 64 RGBA 5/5/5/1 pixel format (blue, opaque)',
    description: (
      <p>
        A single color pixel value from a bitmap image, with 5 bits for each
        color channel and 1 bit for alpha (eg. completely transparent or
        opaque). This format is used for the framebuffer image on the Nintendo
        64. The data value shown is 'steelblue',{' '}
        <span
          style={{
            display: 'inline-block',
            width: 10,
            height: 10,
            backgroundColor: 'steelblue',
          }}
        ></span>{' '}
        #4682B4, at full opacity. See also:{' '}
        <a href="https://www.fileformat.info/mirror/egff/ch09_02.htm">
          Pixel Packing
        </a>
        ,{' '}
        <a href="https://n64squid.com/homebrew/n64-sdk/textures/image-formats/">
          Colour and image format types for the N64
        </a>
      </p>
    ),
    value: 214061,
    bitfields: [
      {label: 'Red', fieldSize: 5},
      {label: 'Green', fieldSize: 5},
      {label: 'Blue', fieldSize: 5},
      {label: 'Alpha', fieldSize: 1},
    ],
  },
  {
    title: 'DOOM Q16.16 fixed-point decimal number (π, 3.141592653589793)',
    value: 205887,
    description: (
      <span>
        <p>
          This format stores a decimal number using 16 bits for the integer part
          and 16 bits for the fractional part (the stuff after the decimal
          point). The example given is π, 3.141592653589793. To convert this
          value back to a floating-point number, divide the fractional part by
          the maximum fractional value (for 16 bits: 65535) and add it to the
          integer part.
        </p>
        <p>
          {' '}
          This number format was{' '}
          <a href="https://doomwiki.org/wiki/Fixed_point">used by DOOM</a> to
          take advantage of the fact that a fixed-point number representation
          can be operated on using integer CPU instructions, which at the time
          were considerably faster than floating-point instructions. See also:{' '}
          <a href="https://en.wikipedia.org/wiki/Fixed-point_arithmetic">
            Fixed-point arithmetic
          </a>
        </p>
      </span>
    ),
    bitfields: [
      {label: 'Integer part', fieldSize: 16},
      {label: 'Fractional part', fieldSize: 16},
    ],
  },
  {
    title: 'MS-DOS 32-bit Date & Time (2020-4-29 11:48:32AM)',
    description: (
      <p>
        This is the original format in which MS-DOS stored file creation time
        and date, as well as the system clock format for IBM PC BIOSes. It has a
        resolution of 2 seconds; the 5 bits allocated to storing seconds is
        insufficient to store 60 distinct values, so it stores seconds divided
        by 2. As it stores the year as an offset from 1980 with a range of 0
        &ndash; 127, values in this format will overflow in the year 2107. See
        also:{' '}
        <a href="https://docs.microsoft.com/en-us/cpp/c-runtime-library/32-bit-windows-time-date-formats">
          32-Bit Windows Time/Date Formats
        </a>
      </p>
    ),
    value: 1350327824,
    bitfields: [
      {label: 'Year (since 1980)', fieldSize: 7},
      {label: 'Month (0 - 11)', fieldSize: 4},
      {label: 'Day of Month (0 - 30)', fieldSize: 5},
      {label: 'Hour (0 - 23)', fieldSize: 5},
      {label: 'Minute (0 - 59)', fieldSize: 6},
      {label: 'Second / 2 (0 - 29)', fieldSize: 5},
    ],
  },
  {
    title: 'MIDI Message (Note On C3 at 50% velocity)',
    value: 9452607,
    description: (
      <span>
        <p>
          In the MIDI protocol, notes are played using{' '}
          <a href="https://www.songstuff.com/recording/article/midi_message_format/">
            MIDI Messages
          </a>{' '}
          like 'Note On' and 'Note Off'. MIDI commands consist of up to 3 bytes:
          a 'status byte' followed by up to 2 'data bytes'. Status bytes begin
          with 1 and data bytes begin with 0. A status byte then contains a 3
          bit 'message' value, basically a command, like 'note on' or 'program
          change', and then the MIDI channel number to send the command to (0
          &ndash; 15).
        </p>
        <img
          width={600}
          src="https://cdn.glitch.com/3d521f4c-3f74-44c5-b7b8-ef308d517c51%2FScreen%20Shot%202020-04-30%20at%209.08.50%20PM.png?v=1588295353615"
        />
        <p>
          In the example we have a 'Note On' message on channel 0, playing note
          number 60 (C3, or 'middle C') with a velocity of 63 (50% of maximum).
        </p>
      </span>
    ),
    bitfields: [
      {fieldSize: 1, label: 'is status byte'},
      {fieldSize: 3, label: 'status message'},
      {fieldSize: 4, label: 'channel'},
      {fieldSize: 1, label: 'is status byte'},
      {fieldSize: 7, label: 'data 1 (note number)'},
      {fieldSize: 1, label: 'is status byte'},
      {fieldSize: 7, label: 'data 2 (velocity)'},
    ],
  },
  {
    title: 'custom (make your own!)',
    value: 0,
    bitfields: [],
  },
];

function sum(array) {
  return array.reduce((acc, v) => acc + v, 0);
}
function dec2bin(dec) {
  return dec.toString(2);
}
function dec2hex(dec) {
  return dec.toString(16).toUpperCase();
}

const localStorageVersion = '5::::'; // change this to invalidate localStorage

// hook to store app state in localStorage
function useLocalStorage(keySuffix, initialValue) {
  const key = localStorageVersion + keySuffix;
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

function useQueryParam(param, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      // Get from url by param
      const item = new URL(window.location.href).searchParams.get(param);
      // Parse stored json or if none return initialValue
      return item != null ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to query params.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        typeof value === 'function' ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);

      const url = new URL(window.location.href);
      url.searchParams.set(param, JSON.stringify(valueToStore));
      window.history.replaceState(null, null, url.toString());
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

const MAX32_BIT_VALUE = Math.pow(2, 32) - 1;

function Input(props) {
  return (
    <input onClick={(e) => e.currentTarget.select()} size={10} {...props} />
  );
}

function clamp(val, min, max) {
  return Math.min(max, Math.max(min, val));
}

// like << but won't overflow at 32 bits
function shiftLeft(value, shift) {
  if (value < 0) {
    throw new Error('unsafe input to shiftLeft');
  }
  return value * Math.pow(2, shift);
}

// like & but will throw if information would be lost by operand > 32 bits
function bitwiseAnd(value, otherValue) {
  if (value > MAX32_BIT_VALUE || otherValue > MAX32_BIT_VALUE) {
    throw new Error('unsafe input to bitwiseAnd');
  }
  return value & otherValue;
}

// like >> but won't overflow at 32 bits
function shiftRight(value, shift) {
  if (value < 0) {
    throw new Error('unsafe input to shiftRight');
  }
  return Math.floor(value / Math.pow(2, shift));
}

// standard react error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {error: null, errorInfo: null};
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    console.log({error, errorInfo});
    // might be bad data in localstorage now
    localStorage.clear();
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{whiteSpace: 'pre-wrap'}}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

function Bitfield({
  bitfields,
  setBitfields,
  dataValue,
  setDataValue,
  fieldSize,
  label,
  i,
}) {
  const maxFieldValue = Math.pow(2, fieldSize) - 1;
  const subsequentsSize = sum(
    bitfields.slice(i + 1).map(({fieldSize}) => fieldSize)
  );

  const fieldValue = bitwiseAnd(
    shiftRight(dataValue, subsequentsSize),
    maxFieldValue
  );

  function setFieldValueDec(newFieldValue) {
    setDataValue(
      dataValue -
        shiftLeft(fieldValue, subsequentsSize) +
        shiftLeft(
          clamp(isNaN(newFieldValue) ? 0 : newFieldValue, 0, maxFieldValue),
          subsequentsSize
        )
    );
  }

  return (
    <div
      style={{
        flex: 1,
        border: 'solid 1px black',
        padding: 4,
        fontSize: 12,
        maxWidth: 400,
      }}
    >
      <div
        style={{
          display: 'flex',
        }}
      >
        <div style={{flex: 1, margin: '2px 0'}}>
          <div>
            <label>
              <Input
                type="text"
                value={label}
                placeholder="field name"
                style={{margin: '2px 0'}}
                size={20}
                onChange={(e) =>
                  setBitfields((s) => {
                    const next = s.slice();
                    next[i] = {...next[i], label: e.currentTarget.value};
                    return next;
                  })
                }
              />{' '}
              <br />
              size:{' '}
              <Input
                value={fieldSize}
                onChange={(e) =>
                  setBitfields((s) => {
                    const next = s.slice();
                    next[i] = {
                      ...next[i],
                      fieldSize: clamp(parseInt(e.currentTarget.value), 0, 32),
                    };
                    return next;
                  })
                }
              />
            </label>{' '}
            <br />
            bits: {fieldSize + subsequentsSize - 1}
            {fieldSize > 1 ? <span> &ndash; {subsequentsSize}</span> : ''}
          </div>
        </div>
        <button
          style={{height: '2em'}}
          onClick={() =>
            setBitfields((s) => {
              const next = s.slice();
              next.splice(i, 1);
              return next;
            })
          }
          title="delete bitfield"
          aria-label="delete bitfield"
        >
          ×
        </button>
      </div>

      <hr />

      <div style={{textAlign: 'right'}}>
        dec (0 &ndash; {maxFieldValue}):{' '}
        <Input
          type="text"
          size={16}
          style={{
            textAlign: 'right',
            margin: '2px 0',
            fontFamily: 'monospace',
          }}
          value={fieldValue}
          onChange={(e) => setFieldValueDec(parseInt(e.currentTarget.value))}
        />
        <br />
        bin (0 &ndash; {dec2bin(maxFieldValue)}):{' '}
        <Input
          type="text"
          size={20}
          style={{
            textAlign: 'right',
            margin: '2px 0',
            fontFamily: 'monospace',
          }}
          value={dec2bin(fieldValue)}
          onChange={(e) => setFieldValueDec(parseInt(e.currentTarget.value, 2))}
        />
        <br />
        hex (0 &ndash; {dec2hex(maxFieldValue)}):{' '}
        <Input
          type="text"
          size={16}
          style={{
            textAlign: 'right',
            margin: '2px 0',
            fontFamily: 'monospace',
          }}
          value={dec2hex(fieldValue)}
          onChange={(e) =>
            setFieldValueDec(parseInt(e.currentTarget.value, 16))
          }
        />
      </div>
    </div>
  );
}

function Details({children, summary, name}) {
  const [open, setOpen] = useLocalStorage(name, false);
  return (
    <details
      open={open ? true : null}
      style={{marginBottom: 16}}
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <summary
        style={{cursor: 'pointer'}}
        onClick={(e) => {
          setOpen((s) => !s);
        }}
      >
        {summary}
      </summary>
      <div
        style={{padding: '0 16px'}}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </details>
  );
}

function Explorer() {
  const [exampleKey, setExampleKey] = useQueryParam(
    'exampleKey',
    examples[0].title
  );
  const [newBitfieldSize, setNewBitfieldSize] = React.useState(4);
  const [bitfields, setBitfields] = useLocalStorage('bitfields', []);
  const [dataValue, setDataValue] = useLocalStorage('dataValue', 0);

  function setDataValueSafe(newValue) {
    setDataValue(clamp(newValue, 0, MAX32_BIT_VALUE));
  }

  const currentExample =
    examples.find(({title}) => title == exampleKey) || examples[0];

  React.useEffect(() => {
    setBitfields(currentExample.bitfields);
    setDataValueSafe(currentExample.value);
  }, [currentExample]);

  React.useEffect(() => {
    console.log({bitfields, dataValue});
  }, [bitfields]);

  return (
    <div>
      <h1>bit packing explorer</h1>
      <Intro />

      <div style={{marginTop: 16}}>
        <h3>example</h3>
        <label>
          <select
            value={currentExample.title}
            onChange={(e) => setExampleKey(e.currentTarget.value)}
            style={{margin: '0 8px', fontSize: '1em'}}
          >
            {examples.map(({title}) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
          </select>
        </label>
        {currentExample.description && (
          <div style={{margin: '0 16px'}}>
            <small>{currentExample.description}</small>
          </div>
        )}
      </div>
      <div>
        <h3>value to unpack</h3>
        <div style={{padding: '0 16px'}}>
          <div style={{display: 'flex'}}>
            <label>
              as decimal:
              <Input
                type="text"
                size={12}
                value={dataValue}
                onChange={(e) =>
                  setDataValueSafe(parseInt(e.currentTarget.value, 10))
                }
                style={{flex: 1, margin: '0 8px', fontFamily: 'monospace'}}
              />
            </label>
            <label>
              as binary:
              <Input
                type="text"
                size={34}
                value={dec2bin(dataValue)}
                onChange={(e) =>
                  setDataValueSafe(parseInt(e.currentTarget.value, 2))
                }
                style={{flex: 1, margin: '0 8px', fontFamily: 'monospace'}}
              />
            </label>
            <label>
              as hexadecimal:
              <Input
                type="text"
                size={9}
                value={dec2hex(dataValue)}
                onChange={(e) =>
                  setDataValueSafe(parseInt(e.currentTarget.value, 16))
                }
                style={{flex: 1, margin: '0 8px', fontFamily: 'monospace'}}
              />
            </label>
          </div>
        </div>
      </div>
      <div>
        <h3>bitfields</h3>
      </div>
      <div style={{display: 'flex', padding: '0 16px'}}>
        {bitfields.map(({fieldSize, label}, i) => {
          return (
            <Bitfield
              key={i}
              {...{
                bitfields,
                setBitfields,
                dataValue,
                setDataValue: setDataValueSafe,
                fieldSize,
                label,
                i,
              }}
            />
          );
        })}
      </div>
      <div style={{padding: 16}}>
        <label>
          {' '}
          add field of size:
          <Input
            type="text"
            value={newBitfieldSize}
            onChange={(e) => setNewBitfieldSize(e.currentTarget.value)}
            style={{margin: '0 8px'}}
          />
          <button
            onClick={() =>
              setBitfields((s) =>
                s.concat({
                  fieldSize: clamp(parseInt(newBitfieldSize), 0, 32),
                  label: '',
                })
              )
            }
          >
            add
          </button>
        </label>
      </div>
      <Details
        summary={<b>a note about endianness</b>}
        name="a note about endianness"
      >
        <p>
          The 'value to unpack' is shown in{' '}
          <a href="https://en.wikipedia.org/wiki/Endianness">big endian</a>{' '}
          order (largest byte to smallest byte), which reads more naturally to
          humans (imo), but if you were to store the value in memory on a little
          endian system and then access each byte separately by increasing
          memory address, they would be in the reverse order. When dealing with
          the whole packed value however (eg. as a 32-bit int), it doesn't
          really matter.
        </p>
      </Details>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Explorer />
    </ErrorBoundary>
  );
}
