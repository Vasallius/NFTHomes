import { useState, useEffect } from 'react';
import {
  Text, RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderMark,
  Tooltip, Box, Flex, Center, Container, Stack, Checkbox, CheckboxGroup, Button
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const SearchFilters = ({ setKeywords, keywords, setQuery, setPage, filters, setFilters }) => {

  const [sf] = useState({
    sfrate: [0, 50000],
    sflotArea: [0, 50],
    sffurnishType: [],
    sfcurfew: [],
    sflotType: [],
    sfoccupy: [],
    sfminStay: [],
    sfinclusion: []
  });

  const sessionHandler = (defaultValue) => {
    const stored = sessionStorage.getItem("rawFilters");
    if (!stored) {
      return defaultValue;
    }
    return JSON.parse(stored);
  }

  const sh = sessionHandler(sf);
  const [rate, setRate] = useState([sh.sfrate[0], sh.sfrate[1]]);
  const [bedroom, setBedroom] = useState([0, 5]);
  const [beds, setBeds] = useState([0, 5]);
  const [bathroom, setBathroom] = useState([0, 5]);
  const [lotArea, setlotArea] = useState([sh.sflotArea[0], sh.sflotArea[1]]);
  const [furnishType, setFurnishType] = useState(sh.sffurnishType);
  const [curfew, setCurfew] = useState(sh.sfcurfew);
  const [lotType, setlotType] = useState(sh.sflotType);
  const [occupy, setOccupy] = useState(sh.sfoccupy);
  const [minStay, setMinStay] = useState(sh.sfminStay);
  const [inclusion, setInclusion] = useState(sh.sfinclusion);
  const [resetButton, setResetButton] = useState(false);

  useEffect(() => {
    const sf = {
      sfrate: rate,
      sflotArea: lotArea,
      sffurnishType: furnishType,
      sfcurfew: curfew,
      sflotType: lotType,
      sfoccupy: occupy,
      sfminStay: minStay,
      sfinclusion: inclusion
    }
    sessionStorage.setItem("rawFilters", JSON.stringify(sf))
    sessionStorage.setItem("filters", JSON.stringify(filters))

  }, [filters, curfew, furnishType, inclusion, lotArea, lotType, minStay, occupy, rate])



  const handleFilterClick = () => {
    let filters1 = `&ratemin=${rate[0]}&ratemax=${rate[1]}&lotmin=${lotArea[0]}&lotmax=${lotArea[1]}`;
    for (const e of furnishType) filters1 += `&furnished=${e}`;
    for (const e of curfew) filters1 += `&curfew=${e}`;
    for (const e of lotType) filters1 += `&type=${e}`;
    for (const e of occupy) filters1 += `&occupancy=${e}`;
    for (const e of minStay) filters1 += `&stay=${e}`;
    for (const e of inclusion) filters1 += `&inclusions=${e}`;
    setFilters(filters1);
    setPage(0);
  };

  return (
    <Center>
      <Container borderTop='none' 
      mt='0'
      borderBottomRadius='30px' borderWidth='3px' borderColor='gray.50' height='fit-content' pb='5' pt='7' alignItems='stretch' minW='90%'>
        <Flex flexDirection='row' flexWrap={'wrap'} justify='center'>
          {/* Rate and Lot Area */}
          <Container width='15em' mr='5' ml='5'>
            <Box  >
              <Text fontWeight='black' ml='-2' mt='2em' >
                Price Range
              </Text >
              <RangeSlider
                mt='1.5em'
                id='slider'
                defaultValue={[sh.sfrate[0], sh.sfrate[1]]}
                min={0}
                max={50000}
                step={500}
                value={rate}
                onChange={(v) => setRate(v)}
                onChangeEnd={(v) => { setRate(v) }}
              >
                <RangeSliderMark color='gray.500' value={50000} mt='-6' ml='-2' fontSize={'9'}>
                  Max
                </RangeSliderMark>
                <RangeSliderMark color='gray.500' value={0} mt='-6' ml='-2' fontSize={'9'}>
                  Min
                </RangeSliderMark>
                <RangeSliderTrack >
                  <RangeSliderFilledTrack bg='#7b1113' />
                </RangeSliderTrack>
                <Tooltip
                  isOpen
                  bg='none'
                  color='#7b1113'
                  placement='bottom'
                  fontWeight='black'
                  shadow='none'
                  mt='-2'
                  label={`₱${sh.sfrate[1]}`}
                >
                  <RangeSliderThumb bg='#7b1113' index={1} />
                </Tooltip>
                <Tooltip
                  isOpen
                  bg='none'
                  color='#7b1113'
                  placement='bottom'
                  fontWeight='black'
                  shadow='none'
                  mt='-2'
                  label={`₱${sh.sfrate[0]}`}
                >
                  <RangeSliderThumb bg='#7b1113' index={0} />
                </Tooltip>

              </RangeSlider>

            </Box>
            <Box>
              <Text fontWeight='black' ml='-2' mt='2em' >
                Lot Type
              </Text >
              <CheckboxGroup size='sm' onChange={(v) => { setlotType(v) }} defaultValue={sh.sflotType} value={lotType}>
                <Stack ml='-2' mt='2' direction={['column']}>
                  <Checkbox value='0'>House</Checkbox>
                  <Checkbox value='1'>Apartment</Checkbox>
                  <Checkbox value='2'>Guesthouse</Checkbox>
                  <Checkbox value='3'>Hotel</Checkbox>
                </Stack>
              </CheckboxGroup>
            </Box>
            
          </Container>
          {/* Furnishing and Curfew */}
          <Container width='15em' mr='5' ml='5'>
            <Box  >
              <Text fontWeight='black' ml='-2' mt='2em' >
                Bedrooms
              </Text >
              <RangeSlider
                mt='1.5em'
                id='slider'
                defaultValue={[0, 5]}
                min={0}
                max={20}
                step={1}
                value={bedroom}
                onChange={(v) => setBedroom(v)}
                onChangeEnd={(v) => { setBedroom(v) }}
              >
                <RangeSliderMark color='gray.500' value={15} mt='-6' ml='10' fontSize={'9'}>
                  Max
                </RangeSliderMark>
                <RangeSliderMark color='gray.500' value={0} mt='-6' ml='-2' fontSize={'9'}>
                  Min
                </RangeSliderMark>
                <RangeSliderTrack >
                  <RangeSliderFilledTrack bg='#7b1113' />
                </RangeSliderTrack>
                <Tooltip
                  isOpen
                  bg='none'
                  color='#7b1113'
                  placement='bottom'
                  fontWeight='black'
                  shadow='none'
                  mt='-2'
                  label={`${bedroom[1]}`}
                >
                  <RangeSliderThumb bg='#7b1113' index={1} />
                </Tooltip>
                <Tooltip
                  isOpen
                  bg='none'
                  color='#7b1113'
                  placement='bottom'
                  fontWeight='black'
                  shadow='none'
                  mt='-2'
                  label={`${bedroom[0]}`}
                >
                  <RangeSliderThumb bg='#7b1113' index={0} />
                </Tooltip>

              </RangeSlider>

            </Box>
            <Box  >
              <Text fontWeight='black' ml='-2' mt='2em' >
                Beds
              </Text >
              <RangeSlider
                mt='1.5em'
                id='slider'
                defaultValue={[0, 5]}
                min={0}
                max={20}
                step={1}
                value={beds}
                onChange={(v) => setBeds(v)}
                onChangeEnd={(v) => { setBeds(v) }}
              >
                <RangeSliderMark color='gray.500' value={15} mt='-6' ml='10' fontSize={'9'}>
                  Max
                </RangeSliderMark>
                <RangeSliderMark color='gray.500' value={0} mt='-6' ml='-2' fontSize={'9'}>
                  Min
                </RangeSliderMark>
                <RangeSliderTrack >
                  <RangeSliderFilledTrack bg='#7b1113' />
                </RangeSliderTrack>
                <Tooltip
                  isOpen
                  bg='none'
                  color='#7b1113'
                  placement='bottom'
                  fontWeight='black'
                  shadow='none'
                  mt='-2'
                  label={`${beds[1]}`}
                >
                  <RangeSliderThumb bg='#7b1113' index={1} />
                </Tooltip>
                <Tooltip
                  isOpen
                  bg='none'
                  color='#7b1113'
                  placement='bottom'
                  fontWeight='black'
                  shadow='none'
                  mt='-2'
                  label={`${beds[0]}`}
                >
                  <RangeSliderThumb bg='#7b1113' index={0} />
                </Tooltip>

              </RangeSlider>

            </Box>
            <Box  >
              <Text fontWeight='black' ml='-2' mt='2em' >
                Bathrooms
              </Text >
              <RangeSlider
                mt='1.5em'
                id='slider'
                defaultValue={[0, 5]}
                min={0}
                max={20}
                step={1}
                value={bathroom}
                onChange={(v) => setBathroom(v)}
                onChangeEnd={(v) => { setBathroom(v) }}
              >
                <RangeSliderMark color='gray.500' value={15} mt='-6' ml='10' fontSize={'9'}>
                  Max
                </RangeSliderMark>
                <RangeSliderMark color='gray.500' value={0} mt='-6' ml='-2' fontSize={'9'}>
                  Min
                </RangeSliderMark>
                <RangeSliderTrack >
                  <RangeSliderFilledTrack bg='#7b1113' />
                </RangeSliderTrack>
                <Tooltip
                  isOpen
                  bg='none'
                  color='#7b1113'
                  placement='bottom'
                  fontWeight='black'
                  shadow='none'
                  mt='-2'
                  label={`${bathroom[1]}`}
                >
                  <RangeSliderThumb bg='#7b1113' index={1} />
                </Tooltip>
                <Tooltip
                  isOpen
                  bg='none'
                  color='#7b1113'
                  placement='bottom'
                  fontWeight='black'
                  shadow='none'
                  mt='-2'
                  label={`${bathroom[0]}`}
                >
                  <RangeSliderThumb bg='#7b1113' index={0} />
                </Tooltip>

              </RangeSlider>

            </Box>
          </Container>
          {/* Occupancy and Minimum Stay */}
          <Container width='11em' mr='5' ml='5'>
            <Box>
              <Text fontWeight='black' ml='-2' mt='2em' >
               Host Language
              </Text >
              <CheckboxGroup size='sm' onChange={(v) => { setOccupy(v) }} defaultValue={sh.sfoccupy} value={occupy}>
                <Stack ml='-2' mt='2' direction={['column']}>
                  <Checkbox value='0'>English</Checkbox>
                  <Checkbox value='1'>Filipino</Checkbox>
                  <Checkbox value='2'>German</Checkbox>
                  <Checkbox value='3'>Spanish</Checkbox>
                  <Checkbox value='4'>Chinese</Checkbox>
                  <Checkbox value='5'>Japanese</Checkbox>
                </Stack>
              </CheckboxGroup>
            </Box>
            
          </Container>
          {/* Rent Inclusion and Amenities */}
          <Container width='11em' mr='5' ml='5'>
            <Box>
              <Text fontWeight='black' ml='-2' mt='2em' >
              Amenities
              </Text >
              <CheckboxGroup size='sm' onChange={(v) => { setInclusion(v) }} defaultValue={sh.sfinclusion} value={inclusion}>
                <Stack ml='-2' mt='2' direction={['column']}>
                  <Checkbox value='0'>Wifi</Checkbox>
                  <Checkbox value='1'>Kitchen</Checkbox>
                  <Checkbox value='2'>Washer</Checkbox>
                  <Checkbox value='3'>Air conditioning</Checkbox>
                  <Checkbox value='4'>Parking</Checkbox>
                </Stack>
              </CheckboxGroup>
            </Box>
            <Box>
              <Text fontWeight='black' ml='-2' mt='2em' >
               Payment
              </Text >
              <CheckboxGroup size='sm' onChange={(v) => { setCurfew(v) }} defaultValue={sh.sfcurfew} value={curfew}>
                <Stack ml='-2' mt='2' direction={['column']}>
                  <Checkbox value='0'>Fiat</Checkbox>
                  <Checkbox value='1'>Cryptocurrency</Checkbox>
                </Stack>
              </CheckboxGroup>
            </Box>
          </Container>
        </Flex>
        <Flex justifyContent='flex-end' mt='8'>
          <Button colorScheme='gray' color="gray.600" borderRadius='full' variant='outline' size='sm' mr='2'
            onClick={() => {
              sessionStorage.clear()
              setRate([0, 50000]);
              setlotArea([0, 50]);
              setFurnishType([]);
              setCurfew([]);
              setlotType([]);
              setOccupy([]);
              setMinStay([]);
              setInclusion([]);
              setResetButton(!resetButton);
              setFilters('');
              setPage(0);
              setKeywords('');
              setQuery('');
            }}>
            Reset
          </Button>
          <Button rightIcon={<ArrowForwardIcon />} borderRadius='full' variant='outline' size='sm'
            onClick={() => {
              handleFilterClick();
              if (keywords !== '') setQuery(`q=${keywords}`);
            }}>
            Apply
          </Button>

        </Flex>

      </Container>
    </Center>


  )
}

export default SearchFilters